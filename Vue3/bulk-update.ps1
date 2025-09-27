# Bulk update script for Vue 2 to Vue 3 migration
$projects = @(
    "03 - HTML Primer\htmlcssprimer",
    "04 - JavaScript Primer\jsprimer", 
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
    "21 - Dynamic Components\productapp",
    "22 - URL Routing\productapp",
    "23 - URL Routing Elements\productapp",
    "24 - Advanced URL Routing\productapp",
    "25 - Transitions\transitions",
    "26 - Extending Vue.js\extendingvue"
)

$baseDir = "e:\Github\apress\apress-pro-vue-js-2\Vue3"

foreach ($project in $projects) {
    $projectPath = Join-Path $baseDir $project
    $packageJsonPath = Join-Path $projectPath "package.json"
    $viteConfigPath = Join-Path $projectPath "vite.config.js"
    $indexHtmlPath = Join-Path $projectPath "public\index.html"
    
    Write-Host "Processing: $project"
    
    if (Test-Path $packageJsonPath) {
        # Create vite.config.js
        $viteConfig = @"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  }
})
"@
        Set-Content -Path $viteConfigPath -Value $viteConfig
        Write-Host "  Created vite.config.js"
    }
}