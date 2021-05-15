$(function()
{
    $(document).on("click", ".mobile-menu-button", function(e)
    {
        e.preventDefault();
        if ($("div.menu").css("display") == "none")
        {
            $("div.menu").css("display", "flex");
            $("div.mobile-menu-button").html("Скрыть меню");            
        }
        else
        {
            $("div.menu").css("display", "none");
            $("div.mobile-menu-button").html("Показать меню");
        }
    })
})