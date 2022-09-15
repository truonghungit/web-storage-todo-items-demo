## Giới thiệu

![Alt text](/assets/Frame%204.png "Optional title")


#### Browser cache
![Alt text](/assets/Frame%203%20(3).png "Optional title")


## Web Storage
![Alt text](/assets/web-storage.png "Optional title")

### Các khái niệm

**Web Storage** cho phép chúng ta lưu trữ một lượng lớn dữ liệu (ít nhất 5MB) mà không ảnh hưởng đến hiệu suất trang web và thông tin không bao giờ được tự động gửi đến server.

- Dữ liệu không bao giờ được tự động gửi lên server.
- Giới hạn lưu trữ lớn hơn cookie (tối đa 5MB).

**Web Storage** cung cấp 2 phương thức để lưu trữ dữ liệu là.

- SessionStorage

- LocalStorage 

### Session Storage
- Chỉ lưu trữ dữ liệu cho một session, có nghĩa là dữ liệu được lưu trữ cho đến khi người dùng đóng trình duyệt (hoặc tab).

### LocalStorage

- Lưu trữ dữ liệu trong thời gian dài, không bị hết hạn và chỉ được xóa thông qua JavaScript hoặc xóa bộ nhớ cache của Trình duyệt / Dữ liệu được lưu trữ cục bộ.
- Dữ liệu đã lưu không bị mất đi khi người dùng đóng tab hoặc tắt trình duyệt.

<br />

> **Lưu ý**
>
> Điều quan trọng cần lưu ý là **Web Storage** chỉ lưu trữ các chuỗi, vì vậy nếu bạn muốn lưu trữ các đối tượng, danh sách hoặc mảng, bạn phải chuyển đổi chúng thành một chuỗi bằng cách sử dụng JSON.stringify ().


<br />

## Cách dùng

### Lưu data vào LocalStorage/SessionStorage

Dùng method `setItem(key, value);`

```
localStorage.setItem("greeting", "Good Morning");
```
```
sessionStorage.setItem("greeting", "Good Morning");
```

### Lấy data từ LocalStorage/SessionStorage

Dùng method `getItem(key);`

```
const greeting = localStorage.getItem("greeting");
```
```
const greeting = localStorage.getItem("greeting");
```

### Xóa data trong LocalStorage/SessionStorage

Dùng method `removeItem(key);`

```
localStorage.removeItem("greeting");
```
```
localStorage.removeItem("greeting");
```

### Xóa toàn bộ data trong LocalStorage/SessionStorage

Dùng method `clear();`

```
localStorage.clear();
```
```
localStorage.clear();
```

## Debug
Dùng developer tool của Browser

![Alt text](/assets/dev-tools.png "Optional title")

## Tài liệu tham khảo

- https://web.dev/storage-for-the-web/
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
- https://www.w3schools.com/js/js_cookies.asp
