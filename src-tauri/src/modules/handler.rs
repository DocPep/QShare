use std::fs;

use serde::Serialize;

pub enum HandlerResult {
    DirectoryResult(Vec<(String, bool)>),
}

impl Serialize for HandlerResult {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        match self {
            HandlerResult::DirectoryResult(vec) => vec.serialize(serializer),
        }
    }
}

#[tauri::command]
pub fn generic_handler(mut args: Vec<String>) -> Box<HandlerResult> {
    let requested_handler = args[0].clone();
    args.remove(0);
    match requested_handler.as_str() {
        "list_directory" => list_directory(args[0].clone()),
        _ => todo!(),
    }
}

fn list_directory(args: String) -> Box<HandlerResult> {
    println!("Reading {}", args);
    let path = fs::metadata(args.clone());
    if let Err(_) = path {
        return Box::new(HandlerResult::DirectoryResult(vec![]));
    }
    let paths = fs::read_dir(args.clone()).unwrap();
    let mut result: Vec<(String, bool)> = [].to_vec();
    for path in paths {
        let metadata = fs::metadata(path.as_ref().unwrap().path().display().to_string());
        if let Err(_) = metadata {
            println!("Failed: {}", path.as_ref().unwrap().path().display().to_string());
        } else {
            result.push((
                path.unwrap().path().display().to_string(),
                metadata.unwrap().is_dir(),
            ));
        }
    }
    Box::new(HandlerResult::DirectoryResult(result))
}
