use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

// Menu components
pub fn init_menu() -> Menu {
    // submenu for file
    let open = CustomMenuItem::new("open".to_string(), "Open");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu_file = Submenu::new("File", Menu::new().add_item(open).add_item(close));
    // submenu for about
    let about = CustomMenuItem::new("about".to_string(), "About");
    let help = CustomMenuItem::new("help".to_string(), "Help");
    let submenu_about = Submenu::new("About", Menu::new().add_item(help).add_item(about));
    let menu = Menu::new()
        .add_native_item(MenuItem::Copy)
        .add_submenu(submenu_file)
        .add_submenu(submenu_about);
    menu
}