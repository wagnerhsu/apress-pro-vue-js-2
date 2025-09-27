# Test Migration Script
# This script helps test the Vue 2 to Vue 3 migration across all projects

$projects = @(
    "01 - Your First Vue Application\todo",
    "03 - HTML Primer\htmlcssprimer",
    "04 - JavaScript Primer\jsprimer", 
    "05 - SportsStore\sportsstore",
    "06 - SportsStore - Checkout and Orders\sportsstore",
    "07 - SportsStore - Scaling and Administration\sportsstore",
    "08 - SportsStore - Administration and Deployment\sportsstore",
    "09 - Understanding Vue.js\nomagic",
    "10 - Understanding Vue.js Projects\projecttools",
    "11 - Understanding Data Bindings\templatesanddata",
    "12 - Using the Basic Directives\templatesanddata",
    "13 - Using the Repeater Directive\templatesanddata",
    "14 - Handling Events\templatesanddata",
    "15 - Working with Form Elements\templatesanddata",
    "16 - Components\templatesanddata",
    "17 - Understanding the Component Lifecycle\lifecycles",
    "18 - Loosely-Coupled Components\productapp",
    "19 - Using RESTful Web Services\productapp",
    "20 - Using a Data Store\productapp",
    "21 - Dynamic Components\productapp",
    "22 - URL Routing\productapp",
    "23 - URL Routing Elements\productapp",
    "24 - Advanced URL Routing\productapp",
    "25 - Transitions\transitions",
    "26 - Extending Vue.js\extendingvue"
)

$baseDir = "e:\Github\apress\apress-pro-vue-js-2\Vue3"
$results = @()

Write-Host "Testing Vue 3 Migration Across All Projects" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green

foreach ($project in $projects) {
    $projectPath = Join-Path $baseDir $project
    $packageJsonPath = Join-Path $projectPath "package.json"
    $viteConfigPath = Join-Path $projectPath "vite.config.js"
    $mainJsPath = Join-Path $projectPath "src\main.js"
    
    Write-Host "`nProcessing: $project" -ForegroundColor Yellow
    
    $result = @{
        Project = $project
        PackageJsonExists = Test-Path $packageJsonPath
        ViteConfigExists = Test-Path $viteConfigPath
        MainJsExists = Test-Path $mainJsPath
        HasVue3 = $false
        HasVite = $false
        HasPinia = $false
        Status = "Unknown"
    }
    
    if (Test-Path $packageJsonPath) {
        $packageContent = Get-Content $packageJsonPath -Raw | ConvertFrom-Json
        
        # Check for Vue 3
        if ($packageContent.dependencies.vue -and $packageContent.dependencies.vue.StartsWith("^3")) {
            $result.HasVue3 = $true
        }
        
        # Check for Vite
        if ($packageContent.devDependencies.'@vitejs/plugin-vue' -or $packageContent.devDependencies.vite) {
            $result.HasVite = $true
        }
        
        # Check for Pinia
        if ($packageContent.dependencies.pinia) {
            $result.HasPinia = $true
        }
        
        # Determine status
        if ($result.HasVue3 -and $result.HasVite) {
            $result.Status = "Migrated"
            Write-Host "  ✅ Migrated to Vue 3 + Vite" -ForegroundColor Green
        } elseif ($result.HasVue3) {
            $result.Status = "Partial"
            Write-Host "  ⚠️  Has Vue 3 but missing Vite" -ForegroundColor Yellow
        } else {
            $result.Status = "Not Migrated"
            Write-Host "  ❌ Not migrated" -ForegroundColor Red
        }
        
        if ($result.HasPinia) {
            Write-Host "  ✅ Using Pinia" -ForegroundColor Green
        }
    } else {
        Write-Host "  ❌ No package.json found" -ForegroundColor Red
        $result.Status = "No Package.json"
    }
    
    $results += $result
}

# Summary
Write-Host "`n`nMigration Summary:" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Green

$migrated = ($results | Where-Object { $_.Status -eq "Migrated" }).Count
$partial = ($results | Where-Object { $_.Status -eq "Partial" }).Count
$notMigrated = ($results | Where-Object { $_.Status -eq "Not Migrated" }).Count

Write-Host "Fully Migrated: $migrated" -ForegroundColor Green
Write-Host "Partially Migrated: $partial" -ForegroundColor Yellow
Write-Host "Not Migrated: $notMigrated" -ForegroundColor Red
Write-Host "Total Projects: $($results.Count)" -ForegroundColor Cyan

# Instructions
Write-Host "`n`nNext Steps:" -ForegroundColor Green
Write-Host "============" -ForegroundColor Green
Write-Host "1. Run 'npm install' in each migrated project directory"
Write-Host "2. Test with 'npm run dev' to verify functionality"
Write-Host "3. Update remaining Vuex components to use Pinia"
Write-Host "4. Fix any compatibility issues in components"

# Export results to CSV for further analysis
$results | Export-Csv -Path "migration-status.csv" -NoTypeInformation
Write-Host "`nDetailed results exported to migration-status.csv" -ForegroundColor Cyan