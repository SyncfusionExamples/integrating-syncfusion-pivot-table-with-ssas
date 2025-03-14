ej.base.enableRipple(false);
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        url: 'http://localhost:12345',   // Replace with your SSAS server endpoint
        catalog: 'AdventureWorks',       // Replace with your SSAS database name
        cube: 'Sales',                    // Replace with your Tabular model name
        providerType: 'SSAS',              // Keep as 'SSAS' if using an OLAP provider
        rows: [{ name: '[Date].[Fiscal Year]', caption: 'Fiscal Year' }],
        columns: [{ name: '[Product].[Category]', caption: 'Product Category' }],
        values: [{ name: '[Measures].[Sales Amount]', caption: 'Total Sales' }],
        filters: [{ name: '[Region].[Country]', caption: 'Country' }]
    },
    height: 400,                       // Set Pivot Table height in pixels
    showFieldList: true,               // Enable or disable interactive field list
    gridSettings: { columnWidth: 100 } // Adjust column width for readability
});
pivotObj.appendTo('#PivotTable');      // Bind the Pivot Table to an HTML element
