// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod modules;

// Dependencies
use modules::menu::init_menu;
use modules::events::handle_event;
use modules::handler::generic_handler;
fn main() {
    tauri::Builder::default()
        .menu(init_menu())
        .on_menu_event(|event| handle_event(&event))
        .invoke_handler(tauri::generate_handler![generic_handler])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
