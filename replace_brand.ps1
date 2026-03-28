# 批量替换品牌名称
$files = Get-ChildItem -Filter '*.html'

foreach ($file in $files) {
    Write-Host "正在处理: $($file.Name)"
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $content = $content -replace '南洋通', '一路向南'
    $content = $content -replace 'NanYangTong', '一路向南，阳光灿烂'
    Set-Content $file.FullName $content -Encoding UTF8 -NoNewline
    Write-Host "✓ 已完成: $($file.Name)" -ForegroundColor Green
}

Write-Host "`n所有文件处理完成！" -ForegroundColor Cyan
