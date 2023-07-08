use tauri::{WindowMenuEvent};

// Function to handle events
pub fn handle_event(event: &WindowMenuEvent) {
    // place the event handlers in alphabetical order
    match event.menu_item_id() {
        "about" => {
            event.window().emit("about", "This is the about event.").unwrap();
        }
        "close" => {
            event.window().close().unwrap();
            std::process::exit(0);
        }
        "help" => {
            event.window().emit("help", "This is the help event.").unwrap();
        }
        "open" => {
            event.window().emit("file", "This is the file event.").unwrap();
        }
        _ => {}
    }
    // log the event to stdout
    println!("Event: {}", event.menu_item_id());
}