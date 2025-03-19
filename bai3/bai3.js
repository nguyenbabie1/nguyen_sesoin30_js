let phones = []
let cart = []
let menu = `
-----------QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI-----------
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại
5. Thanh toán tất cả điện thoại trong giỏ hàng (Thông báo thanh toán thành công, và xóa toàn bộ giỏ hàng)
6. Sắp xếp điện thoại theo giá:
    a.Tăng dần
    b.Giảm dần
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hàng (VD: samsung - 5,iphone - 3,...)
9. Thoát chương trình

`;

let choice;
while (choice !== 9) {
    choice = +prompt(menu);
    switch (choice) {
        case 1: 
            displayPhonesByCompany();
            break;
        case 2: 
            addNewPhone();
            break;
        case 3: 
            searchPhone();
            break;
        case 4: 
            break;
        case 9: 
            alert("Cảm ơn bạn đã sử dụng chương trình")
            break;
        default:
            alert("Nhập sai rồi còn đâu")
            break;
    }
}

function displayPhonesByCompany() {
    let company = prompt("Nhập hãng điện thoại muốn xem (Samsung, Apple, Xiaomi...):")
    let foundPhones = [];
    for (let i = 0; i < phones.length; i++) {
        if (company.toLowerCase() === phones[i].company.toLowerCase()) {
            foundPhones.push(phones[i]);
        }
    }
    if (foundPhones.length === 0) {
        alert("Không tìm thấy điện thoại của hãng này!")
    } else {
        console.table(foundPhones);
    }
}

function addNewPhone() {
    let id = Math.ceil(Math.random() * 1000);
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].id === id) {
            alert("Mã điện thoại đã tồn tại!");
            return;
        }
    }
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng:");
    let company = prompt("Nhập hãng điện thoại:");
    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
        alert("Giá hoặc số lượng không hợp lệ!");
        return;
    }
    phones.push({
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        company: company
    });
    alert("Thêm điện thoại thành công!");
}

function searchPhone() {
    let searchType = prompt("Tìm theo (1) ID hoặc (2) Tên điện thoại? (Nhập 1 hoặc 2)");
    if (searchType === "1") {
        let id = +prompt("Nhập ID điện thoại cần tìm:");
        for (let i = 0; i < phones.length; i++) {
            if (phones[i].id === id) {
                console.table([phones[i]]);
                return;
            }
        }
        alert("Không tìm thấy điện thoại!");
    } else if (searchType === "2") {
        let name = prompt("Nhập tên điện thoại cần tìm:");
        let foundPhones = [];
        for (let i = 0; i < phones.length; i++) {
            if (phones[i].name.toLowerCase().includes(name.toLowerCase())) {
                foundPhones.push(phones[i]);
            }
        }
        if (foundPhones.length > 0) {
            console.table(foundPhones);
        } else {
            alert("Không tìm thấy điện thoại!");
        }
    } else {
        alert("Lựa chọn không hợp lệ!");
    }
}

