use std::fs;

#[tauri::command]
pub fn generic_handler(mut args: Vec<String>) -> Vec<String> {
    let requested_handler = args[0].clone();
    args.remove(0);
    match requested_handler.as_str() {
        "list_directory" => list_directory(args),
        _ => todo!()
    }
}

fn list_directory(args: Vec<String>) -> Vec<String> {
    let paths = fs::read_dir(args[0].clone()).unwrap();
    let mut result: Vec<String> = [].to_vec();
    for path in paths {
        result.push(path.unwrap().path().display().to_string());
    }
    result
}