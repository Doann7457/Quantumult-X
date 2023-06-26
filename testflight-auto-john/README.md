# testflight tự động john app beta on test flight trong quantumult X
b1 vào setting phần rewite chọn resources chọn góc trên cùng bên phải để thêm tag: tên bất kì ,resource url : dán raw https://raw.githubusercontent.com/Doann7457/testflight-auto-john/main/testflight.key.snippet rồi done b1
b2 ngoài mh chính có 3 gạch cạnh nút setting chọn vào phần request rồi add  - advanced   tag:name , script : raw https://raw.githubusercontent.com/Doann7457/testflight-auto-john/main/Auto_join_TF-VIETHOABYDOAN.js , icon : ảnh icon  : https://raw.githubusercontent.com/Doann7457/testflight-auto-john/main/testflight.png , done b2 
b3 bật mitm và rewrite rồi bật vpn . done
thành quả 
![1A4364B3-AE98-4A3A-BC14-A10F698152C5](https://github.com/Doann7457/testflight-auto-john/assets/100755872/fc4d61b6-7e59-457c-b9db-1988ed913306)
khi vào các link test fligh thì app quan sẽ báo là lưu id của app như hình lưu cả app full  và app vẫn tham gia được 
![665B7939-8431-4E78-8B77-7D3DAE2F62D8](https://github.com/Doann7457/testflight-auto-john/assets/100755872/811a4e41-ee9a-4f4a-b191-88de0e82c504)
ảnh app vẫn còn vào được 
lúc này mình ko mở để tham gia 
vào lại mục request do lúc này mình để time lâu nên các app dã lưu id chưa tự động tham gia mà mình vào thủ công chạy thủ công thì quan báo là đã tham gia 3 app lúc nãy lưu id ví dụ : exprees vpn, passepartout vpn clien, mullavd vpn như hình lúc này 3 app này vẫn còn tham gia được nên quan thông báo là mullvad vpn testflight tham gia thành công ,express vpn testflight tham gia thành công,passepartout vpn clien testflight tham gia thành công như hình ![9209668F-FB37-4E28-8A48-A07439A8D88A](https://github.com/Doann7457/testflight-auto-john/assets/100755872/646f8101-4587-4eb3-bcf1-df98b6baf64f)
còn app full thì không thấy báo gì cả  
nếu muốn chạy tool vào test 10s/1 lần thì có thể để ở request-add-c ron task phần cron expression là */10 * * * * *  như tác giả như hình ![2023_06_25_16_42_IMG_5170] 
nếu không được thì vào phần code điều chỉnh cũng được 
(https://github.com/Doann7457/testflight-auto-john/assets/100755872/a0a88384-38a5-44ec-b227-48d245150892)
![2023_06_25_16_48_IMG_5171](https://github.com/Doann7457/testflight-auto-john/assets/100755872/f110e644-5cab-4903-bd48-15a2fba43676)

Hiện hành id là những id app đang chạy nền để auto john
có thể nhấn giữ http request để xem các app id đang chạy hoặc đang hiện hành log 
![2023_06_25_17_05_IMG_5173](https://github.com/Doann7457/testflight-auto-john/assets/100755872/7decf877-dca4-4250-8b6f-2fac363964a1)
![2023_06_25_17_03_IMG_5172](https://github.com/Doann7457/testflight-auto-john/assets/100755872/80eda3af-7f6b-49ed-9da7-a744a1d92677)
