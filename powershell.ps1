# Check if the Az module is installed
if (-not (Get-Module -ListAvailable -Name Az)) {
  # If not, install the Az module
  Install-Module -Name Az -AllowClobber -Scope CurrentUser
}

# Define variables
$resourceGroupName = "myResourceGroup"
$location = "West Europe"
$storageAccountName = "mystorageaccount"

# Login to Azure
Connect-AzAccount

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName "Standard_LRS"