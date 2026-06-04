/*
Technitium DNS Server Vietnamese UI overlay.
This file translates visible UI text client-side.
*/
(function () {
    "use strict";

    var phraseMap = {
        "Technitium DNS Server": "Technitium DNS Server",
        "DNS Server": "Máy chủ DNS",
        "My Profile": "Thông tin cá nhân",
        "Create API Token": "Tạo API Token",
        "Change Password": "Đổi mật khẩu",
        "Configure 2FA": "Cấu hình 2FA",
        "Change Theme": "Đổi giao diện",
        "Logout": "Đăng xuất",
        "Username": "Tên đăng nhập",
        "Password": "Mật khẩu",
        "Enter OTP": "Nhập OTP",
        "Enter the 6-digit code you see in your authenticator app.": "Nhập mã 6 số trong ứng dụng xác thực.",
        "Working...": "Đang xử lý...",
        "Login": "Đăng nhập",
        "Forgot Password?": "Quên mật khẩu?",
        "or login with": "hoặc đăng nhập bằng",
        "New Update Available!": "Có bản cập nhật mới!",
        "Dashboard": "Tổng quan",
        "Zones": "Zone",
        "Cache": "Bộ đệm",
        "Allowed": "Cho phép",
        "Blocked": "Chặn",
        "Apps": "Ứng dụng",
        "DNS Client": "Client DNS",
        "Settings": "Cài đặt",
        "Administration": "Quản trị",
        "Logs": "Nhật ký",
        "About": "Giới thiệu",
        "Last Hour": "1 giờ qua",
        "Last Day": "1 ngày qua",
        "Last Week": "1 tuần qua",
        "Last Month": "1 tháng qua",
        "Last Year": "1 năm qua",
        "Custom": "Tùy chỉnh",
        "Start": "Bắt đầu",
        "End": "Kết thúc",
        "Show": "Hiển thị",
        "Total Queries": "Tổng truy vấn",
        "No Error": "Không lỗi",
        "Server Failure": "Lỗi máy chủ",
        "NX Domain": "Không tồn tại miền",
        "Refused": "Từ chối",
        "Authoritative": "Có thẩm quyền",
        "Recursive": "Đệ quy",
        "Cached": "Đã lưu đệm",
        "Dropped": "Đã bỏ",
        "Clients": "Client",
        "Top Clients": "Top Client",
        "More": "Thêm",
        "Queries": "Truy vấn",
        "Top Domains": "Top tên miền",
        "Domain": "Tên miền",
        "Hits": "Lượt",
        "Top Blocked Domains": "Top tên miền bị chặn",
        "Blocking": "Chặn",
        "Enable Blocking": "Bật chặn",
        "Disable Blocking": "Tắt chặn",
        "Disable Blocking For 1 Minute": "Tắt chặn trong 1 phút",
        "Disable Blocking For 2 Minutes": "Tắt chặn trong 2 phút",
        "Disable Blocking For 5 Minutes": "Tắt chặn trong 5 phút",
        "Disable Blocking For 10 Minutes": "Tắt chặn trong 10 phút",
        "Disable Blocking For 15 Minutes": "Tắt chặn trong 15 phút",
        "Disable Blocking For 30 Minutes": "Tắt chặn trong 30 phút",
        "Disable Blocking For 1 Hour": "Tắt chặn trong 1 giờ",
        "Disable Blocking For 3 Hours": "Tắt chặn trong 3 giờ",
        "Add Zone": "Thêm zone",
        "Edit": "Chỉnh sửa",
        "Page Number": "Số trang",
        "Zones Per Page": "Số zone mỗi trang",
        "Go": "Đi",
        "Zone": "Zone",
        "Type": "Loại",
        "Status": "Trạng thái",
        "Serial": "Số serial",
        "Expiry": "Hết hạn",
        "Last Modified": "Cập nhật cuối",
        "Back": "Quay lại",
        "Add Record": "Thêm bản ghi",
        "Enable Zone": "Bật zone",
        "Disable Zone": "Tắt zone",
        "Delete Zone": "Xóa zone",
        "Resync": "Đồng bộ lại",
        "Resyncing...": "Đang đồng bộ...",
        "Options": "Tùy chọn",
        "Import Zone": "Nhập zone",
        "Export Zone": "Xuất zone",
        "Convert Zone": "Chuyển đổi zone",
        "Clone Zone": "Nhân bản zone",
        "Zone Options": "Tùy chọn zone",
        "Permissions": "Phân quyền",
        "Allow List": "Danh sách cho phép",
        "Block List": "Danh sách chặn",
        "No Data": "Không có dữ liệu",
        "Sign Zone": "Ký zone",
        "Hide DNSSEC Records": "Ẩn bản ghi DNSSEC",
        "Show DNSSEC Records": "Hiện bản ghi DNSSEC",
        "View DS Info": "Xem thông tin DS",
        "Properties": "Thuộc tính",
        "Unsign Zone": "Bỏ ký zone",
        "Name": "Tên",
        "Records Per Page": "Số bản ghi mỗi trang",
        "Error!": "Lỗi!",
        "Invalid Response!": "Phản hồi không hợp lệ!",
        "Missing!": "Thiếu dữ liệu!",
        "Warning": "Cảnh báo",
        "Warning!": "Cảnh báo!",
        "Success": "Thành công",
        "Success!": "Thành công!",
        "General": "Cơ bản",
        "Web Service": "Dịch vụ Web",
        "Optional Protocols": "Giao thức tùy chọn",
        "Proxy & Forwarders": "Proxy & Forwarders",
        "DNS Server Domain": "Tên miền DNS Server",
        "DNS Server Local End Points": "Local End Points",
        "DNS Server IPv4 Source Addresses": "IPv4 Source Addresses",
        "DNS Server IPv6 Source Addresses": "IPv6 Source Addresses",
        "Default Record TTL": "TTL bản ghi mặc định",
        "Default NS Record TTL": "TTL bản ghi NS mặc định",
        "Default SOA Record TTL": "TTL bản ghi SOA mặc định",
        "Default Responsible Person": "Email người quản trị mặc định",
        "Zone Defaults": "Mặc định của Zone",
        "Use SOA Serial Date Scheme": "Sử dụng định dạng ngày cho SOA Serial",
        "Minimum SOA Refresh": "SOA Refresh tối thiểu",
        "Minimum SOA Retry": "SOA Retry tối thiểu",
        "Zone Transfer Allowed Networks": "Mạng được phép Zone Transfer",
        "Notify Allowed Networks": "Mạng được phép Notify",
        "DNS Apps": "Ứng dụng DNS",
        "Enable Automatic Update": "Bật tự động cập nhật",
        "IPv6 Support": "Hỗ trợ IPv6",
        "Sessions": "Phiên làm việc",
        "Users": "Người dùng",
        "Groups": "Nhóm",
        "Single Sign-On (SSO)": "Đăng nhập một lần (SSO)",
        "Cluster": "Cluster",
        "Session": "Phiên",
        "Last Seen": "Hoạt động cuối",
        "Remote Address": "Địa chỉ từ xa",
        "User Agent": "Trình duyệt (User Agent)",
        "Please": "Vui lòng",
        "Are you sure": "Bạn có chắc chắn"
    };

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    var sortedPhrases = Object.keys(phraseMap).sort(function (a, b) {
        return b.length - a.length;
    });

    function translateText(text) {
        if (!text || !text.trim()) return text;

        var out = text;
        for (var i = 0; i < sortedPhrases.length; i++) {
            var src = sortedPhrases[i];
            var dst = phraseMap[src];
            if (src === dst) continue;

            var re = new RegExp(escapeRegExp(src), "g");
            out = out.replace(re, dst);
        }

        return out;
    }

    function translateNodeText(root) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                var parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_ACCEPT;
                var tag = parent.tagName;
                if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var n;
        while ((n = walker.nextNode())) {
            var translated = translateText(n.nodeValue);
            if (translated !== n.nodeValue) n.nodeValue = translated;
        }
    }

    function translateAttributes(root) {
        var elements = root.querySelectorAll("[placeholder],[title],[aria-label],[data-loading-text],input[type='button'],input[type='submit'],button");
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            ["placeholder", "title", "aria-label", "data-loading-text", "value"].forEach(function (attr) {
                if (!el.hasAttribute(attr)) return;
                var v = el.getAttribute(attr);
                var tv = translateText(v);
                if (tv !== v) el.setAttribute(attr, tv);
            });
        }
    }

    function applyTranslation(root) {
        translateNodeText(root);
        if (root.querySelectorAll) translateAttributes(root);
    }

    function patchDialogs() {
        var nativeConfirm = window.confirm;
        window.confirm = function (msg) {
            return nativeConfirm.call(window, translateText(msg));
        };

        if (typeof window.showAlert === "function") {
            var nativeShowAlert = window.showAlert;
            window.showAlert = function (type, title, message, objAlertPlaceholder) {
                return nativeShowAlert(type, translateText(title), translateText(message), objAlertPlaceholder);
            };
        }
    }

    function init() {
        document.documentElement.lang = "vi";
        applyTranslation(document.body || document.documentElement);
        patchDialogs();

        var observer = new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var m = mutations[i];
                for (var j = 0; j < m.addedNodes.length; j++) {
                    var node = m.addedNodes[j];
                    if (node.nodeType === Node.TEXT_NODE) {
                        var t = translateText(node.nodeValue);
                        if (t !== node.nodeValue) node.nodeValue = t;
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        applyTranslation(node);
                    }
                }
            }
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
