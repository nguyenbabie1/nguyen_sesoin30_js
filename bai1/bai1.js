let products = [
    {
        id: 1,
        name: "Pịa",
        price: 200000,
        quantity: 20,
        category: "món ăn dân tộc khum biết",
    },
    {
        id: 2,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc mông",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 20,
        category: "món ăn dân tộc mông",
    },
    {
        id: 4,
        name: "Pánh Đọu Xanh",
        price: 60000,
        quantity: 20,
        category: "món ăn dân tộc kinh",
    },
]
let cart = []
let menu =
    `MENU-------------------------------------
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.
`
let choice
while (choice !== 5) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            displaySanpham()
            break;
        case 2:
            clickProduct()
            break;
        case 3:
            sortSanPham()
            break;
        case 4:
            tinhTong()
            break;
        case 5:
            alert("Cảm ơn vi đã mua sản phẩm chúng tôi")
            break;
        default:
            alert("Nhập cái gì vậy không nhìn à")
            break;
    }
}
// function displaySanpham() {
//     for (let i in products) {
//         console.log("id:",products[i].id)
//         console.log("Ten san pham:",products[i].name)
//         console.log("Gia tien san pham:",products[i].price)
//         console.log("So luong san pham:",products[i].quantity)
//         console.log("Nguon goc san pham:",products[i].category)
//     }
// }
function displaySanpham() {
    let input = prompt(
        "Chọn danh mục sản phẩm:\n1. món ăn dân tộc mông\n2. món ăn dân tộc kinh\n3. món ăn dân tộc khum biết");

    if (input === "1") {
        for (let key in products) {
            if (products[key].category === "món ăn dân tộc mông") {
                console.log(products[key]);
            }
        }
    } else if (input === "2") {
        for (let key in products) {
            if (products[key].category === "món ăn dân tộc kinh") {
                console.log(products[key]);
            }
        }
    } else if (input === "3") {
        for (let key in products) {
            if (products[key].category === "món ăn dân tộc khum biết") {
                console.log(products[key]);
            }
        }
    }
}
function clickProduct() {
    let id = +prompt("Nhập ID sản phẩm: ");
    let count = 0;
    for (let i in products) {
        if (products[i].id === id) {
            count++;
            let amount = +prompt(`Nhập số lượng muốn mua (còn: ${products[i].quantity}): `)
            if (amount > 0 && amount <= products[i].quantity) {
                products[i].quantity -= amount;
                let cartItem = cart.find(item => item.id === id)
                if (cartItem) {
                    cartItem.amount += amount
                } else {
                    let buy = {
                        id: products[i].id,
                        name: products[i].name,
                        price: products[i].price,
                        category: products[i].category,
                        amount: amount,
                    };
                    cart.push(buy);
                }
                console.log(`Đã thêm ${amount} ${products[i].name} vào giỏ hàng.`)
                console.table(cart)
                break;
            } else {
                console.log("Không đủ sản phẩm hoặc số lượng nhập không hợp lệ.")
            }
        }
    }

    if (count === 0) {
        console.log("Không tìm thấy sản phẩm.");
    }
}
function sortSanPham() {
    let menuTangGiam = +prompt("Chọn cách sắp xếp:\n 1.Giá tăng \n 2.Giá giảm")
    switch (menuTangGiam) {
        case 1:
            console.log("Danh sách tăng dần")
            tangDan()
            break;
        case 2:
            console.log("Danh sách giảm dần")
            giamDan()
            break;
    }
}
function tangDan() {
    let temp = 0
    let arr = []
    for (let i in products) {
        arr.push(products[i]);
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
function giamDan() {
    let temp = 0;
    let arr = [];
    for (let i in products) {
        arr.push(products[i]);
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
function tinhTong() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].amount
        console.log(`Tổng tiền cần thanh toán: ${sum} VND`)
    }
}