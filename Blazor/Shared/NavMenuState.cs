using Microsoft.AspNetCore.Components;
using Syncfusion.Blazor.Layouts;
using Syncfusion.Blazor.PivotView;
using BlazorServerApp.Data;
namespace BlazorServerApp.Shared
{
    public class NavMenuState
    {
        public EventCallback<bool> OnChange;

        public SfDashboardLayout sfDashboardLayout;
        public SfPivotView<ProductDetails> pivotRef;

        public void RegisterOnChange(EventCallback<bool> callback)
        {
            OnChange = callback;
        }

        public async Task NotifyStateChanged(bool message)
        {
            await OnChange.InvokeAsync(message);

        }
    }
}
