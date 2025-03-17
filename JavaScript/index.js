ej.base.enableRipple(false);
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        url: 'http://localhost:12345',   // Replace with your SSAS server endpoint
        catalog: 'AdventureWorks',       // Replace with your SSAS database name
        cube: 'Sales',                    // Replace with your Tabular model name
        providerType: 'SSAS',
        rows: [{ name: '[Date].[Fiscal Year]', caption: 'Fiscal Year' }],
        columns: [{ name: '[Product].[Category]', caption: 'Product Category' }],
        values: [{ name: '[Measures].[Sales Amount]', caption: 'Total Sales' }],
        filters: [{ name: '[Region].[Country]', caption: 'Country' }]
    },
    height: 400,
    showFieldList: true,
    gridSettings: { columnWidth: 100 }
});
pivotObj.appendTo('#PivotTable'); 
