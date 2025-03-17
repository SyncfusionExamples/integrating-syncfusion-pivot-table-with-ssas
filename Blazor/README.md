# Integrating Syncfusion Pivot Table with SSAS Multidimensional Model in Blazor

This project showcases the integration of Syncfusion Blazor [Pivot Table](https://blazor.syncfusion.com/documentation/introduction) with an SSAS Multidimensional Model.

## Prerequisites

Ensure you have the following installed:
- Visual Studio
- A web browser

## How to Run the Application

1. Open the application in Visual Studio.

2. Dependent packages will be automatically downloaded from nuget.org.

3. Update the `PivotViewDataSourceSettings` in the `Home.razor` file:
   - Replace `Url` with your SSAS server endpoint.
   - Replace `Catalog` with your SSAS database name.
   - Replace `Cube` with your Multidimensional model name.

4. Run the application once the packages are downloaded.

This will display the Syncfusion Blazor [Pivot Table](https://blazor.syncfusion.com/documentation/introduction) component integrated with the SSAS Multidimensional Model.