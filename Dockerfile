# syntax=docker.io/docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*

RUN git clone --depth 1 https://github.com/TechnitiumSoftware/TechnitiumLibrary.git /TechnitiumLibrary \
  && dotnet build /TechnitiumLibrary/TechnitiumLibrary.ByteTree/TechnitiumLibrary.ByteTree.csproj -c Release \
  && dotnet build /TechnitiumLibrary/TechnitiumLibrary.Net/TechnitiumLibrary.Net.csproj -c Release \
  && dotnet build /TechnitiumLibrary/TechnitiumLibrary.Security.OTP/TechnitiumLibrary.Security.OTP.csproj -c Release

WORKDIR /src
COPY --link . .

# Build from source so docker compose can produce an image directly from this repo.
RUN dotnet publish DnsServerApp/DnsServerApp.csproj -c Release -o /out /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0

# Add the MS repo to install `libmsquic` to support DNS-over-QUIC:
ADD --link https://packages.microsoft.com/config/ubuntu/24.04/packages-microsoft-prod.deb /
RUN <<HEREDOC
  dpkg -i packages-microsoft-prod.deb && rm packages-microsoft-prod.deb
  # `dnsutils` added to include the `dig` command for troubleshooting:
  apt-get update && apt-get install -y libmsquic dnsutils
  apt-get clean -y && rm -rf /var/lib/apt/lists/*

  # `/etc/dns` is expected to exist the default directory for persisting state:
  # (Users should volume mount to this location or modify the `CMD` of their container)
  mkdir /etc/dns
HEREDOC

# Copy the publish output from the build stage.
WORKDIR /opt/technitium/dns
COPY --from=build /out /opt/technitium/dns

ENTRYPOINT ["/usr/bin/dotnet", "/opt/technitium/dns/DnsServerApp.dll"]
CMD ["/etc/dns"]


## Only append image metadata below this line:
EXPOSE \
  # Standard DNS service
  53/udp 53/tcp      \
  # DNS-over-QUIC (UDP) + DNS-over-TLS (TCP)
  853/udp 853/tcp    \
  # DNS-over-HTTPS (UDP => HTTP/3) (TCP => HTTP/1.1 + HTTP/2)
  443/udp 443/tcp    \
  # DNS-over-HTTP (for when running behind a reverse-proxy that terminates TLS)
  80/tcp 8053/tcp    \
  # Technitium web console + API (HTTP / HTTPS)
  5380/tcp 53443/tcp \
  # DHCP
  67/udp

# https://specs.opencontainers.org/image-spec/annotations/
# https://github.com/opencontainers/image-spec/blob/main/annotations.md
LABEL org.opencontainers.image.title="Technitium DNS Server"
LABEL org.opencontainers.image.vendor="Technitium"
LABEL org.opencontainers.image.source="https://github.com/TechnitiumSoftware/DnsServer"
LABEL org.opencontainers.image.url="https://technitium.com/dns/"
LABEL org.opencontainers.image.authors="support@technitium.com"
