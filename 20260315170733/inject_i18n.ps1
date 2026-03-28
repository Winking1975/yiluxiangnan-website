# inject_i18n.ps1 — 批量为子页面注入 lang.css 和 i18n.js
$base = "c:\Users\Admin\WorkBuddy\20260315170733"
$files = @("hotel.html","rent.html","work.html","study.html","bank.html","services.html","community.html","safety.html")

foreach ($f in $files) {
    $path = Join-Path $base $f
    $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

    # inject lang.css
    if ($c -notmatch "lang\.css") {
        if ($c -match "css/pages\.css") {
            $c = $c -replace 'href="css/pages\.css"/>', 'href="css/pages.css"/>' + "`r`n" + '  <link rel="stylesheet" href="css/lang.css"/>'
            $c = $c -replace 'href="css/pages\.css" />', 'href="css/pages.css" />' + "`r`n" + '  <link rel="stylesheet" href="css/lang.css" />'
        } else {
            $c = $c -replace 'href="css/style\.css"/>', 'href="css/style.css"/>' + "`r`n" + '  <link rel="stylesheet" href="css/pages.css"/>' + "`r`n" + '  <link rel="stylesheet" href="css/lang.css"/>'
        }
    }

    # inject i18n.js
    if ($c -notmatch "i18n\.js") {
        $c = $c -replace '<script src="js/main\.js"></script>', '<script src="js/i18n.js"></script>' + "`r`n" + '<script src="js/main.js"></script>'
    }

    [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
    Write-Host "done: $f"
}
Write-Host "All done!"
