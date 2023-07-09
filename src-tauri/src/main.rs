// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Dependencies
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu, WindowMenuEvent};

// Menu components
fn init_menu() -> Menu {
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

// Function to handle events
fn handle_event(event: &WindowMenuEvent) {
    match event.menu_item_id() {
        "open" => {
            println!("Open");
        }
        "close" => {
            event.window().close().unwrap();
            std::process::exit(0);
        }
        _ => {}
    }

    println!("Event: {}", event.menu_item_id());
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    match name {
        "" => format!("Please insert a name to get a greeting!"),
        _ => format!("Hello, {}! You've been greeted from Rust!", name)
    }
}

fn main() {
    tauri::Builder::default()
        .menu(init_menu())
        .on_menu_event(|event| handle_event(&event))
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
