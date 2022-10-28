#!name=Unlock Buy Apple
#!desc=Unlock receipt buy.itunes.apple.com
[MITM]
hostname = %APPEND% buy.itunes.apple.com, apimboom2.globaldelight.net
[Script]
Buy = type=http-response,pattern=^https:\/\/(buy\.itunes\.apple\.com\/verifyReceipt|apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php),requires-body=1,max-size=0,script-path=scripts/langkhach/verify_receipt.js,script-update-interval=-1
