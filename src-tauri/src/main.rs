// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod modules;

// Dependencies
use modules::menu::init_menu;
use modules::events::handle_event;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    match name {
        "" => format!("Please insert a name to get a greeting!"),
        _ => format!("Hello, {}! You've been greeted from Rust!", name),
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
