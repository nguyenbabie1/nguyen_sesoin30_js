const library = [
    {
        id: 1,
        name: "Harry Potter",
        price: 20,
        quantity: 25,
        category: "Fantasy",
    },
];
let cart = [];
let menu = `
    -----------------MENU----------------
    1.Hiển thị danh sách sách theo thể loại
    2.Thêm sách mới vào kho
    3.Tìm kiếm sách theo id.
    4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)
    5.Sắp xếp sách theo giá::
    6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
    7.Hiển thị tổng số lượng sách trong kho.
    8.Thoát.`;
let input;
let miniMenu=`
1.Tang dan
2.Giam dan`
do {
    input = +prompt(menu);
    switch (input) {
        case 1:
            display();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            tangGiam();
           
        case 6:
            totalPrice();
            break;
        case 7:
            totalQuantity();
            break;
        case 8:
            break;
        default:
            console.log("Không hợp lệ");
    }
} while (input !== 8);

function display() {
    let text = prompt("Nhập thể loại: ");
    let arr = [];
    for (let i in library) {
        if (library[i].category.toLowerCase === text.toLowerCase) {
            arr.push(library[i]);
        }
    }
    console.table(arr);
}
function addBook() {
    let newBook = {
        id: library.length + 1,
        name: prompt("Nhập tên: "),
        price: prompt("Nhập tiền: "),
        quantity: prompt("Nhập số lượng: "),
        category: prompt("Nhập thể loại: "),
    };
    library.push(newBook);
}
function searchBook() {
    let searchId = +prompt("Mời bạn nhập ID sách muốn tìm:");
    let count = 0;
    for (let i in library) {
        if (library[i].id === searchId) {
            console.log(library[i]);
            count++;
        }
    }
    if (count === 0) {
        alert("Không tìm thấy sách");
    }
}
function buyBook(library, cart) {
    let id = +prompt("nhập id sản phẩm: ");
    let count = 0;
    for (let i in library) {
        if (library[i].id === id) {
            count++;
            let amount = +prompt("nhập số lượng muốn mua: ");
            if (amount <= library[i].quantity) {
                library[i].quantity -= amount;
                let buy = {
                    id: library[i].id,
                    name: library[i].name,
                    price: library[i].price,
                    category: library[i].category,
                    amount: amount,
                };
                cart.push(buy);
                console.log(`đã thêm ${library[i].name} vào giỏ hàng`);
                break;
            } else {
                console.log("Không đủ sản phẩm");
            }
        }
    }
    if (count === 0) {
        console.log("không tìm thấy sản phẩm");
    }
}
function sortAscending() {
    let temp = 0;
    let arr = [];
    for (let i in library) {
        arr.push(library[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].price > arr[j].price) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
function sortDescending() {
    let temp = 0;
    let arr = [];
    for (let i in library) {
        arr.push(library[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].price < arr[j].price) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
function totalPrice() {
    let totalPrice = 0;
    let totalBooks = 0;
    for (let i in cart) {
        total += cart[i].price * cart[i].amount;
        totalBooks += cart[i].amount;
    }
    console.log("Tổng tiền: " + totalPrice);
    console.log("Tổng số sách: " + totalBooks);
}
function totalQuantity() {
    let libraryBooks = 0;
    for (let i in library) {
        libraryBooks += library[i].quantity;
    }
    console.log("Tổng số sách trong kho: " + libraryBooks);
}
function tangGiam() {
    let miniChoice
    while (miniChoice !== 3) {
        miniChoice = +prompt(miniMenu);
        switch (miniChoice) {
            case 1:
                console.log("Tăng dần")
                sortAscending();
                break;
            case 2:
                console.log("Giảm dần")
                sortDescending();
                break;
            case 3:
                break;
        }
    }
}
