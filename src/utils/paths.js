import path from "path";

const root = path.resolve()

export const paths = {
    root: root,
    env: path.join(path.dirname(""), ".env"),
    src: path.join(path.dirname(""),"src"),
    public: path.join(root, "src", "public"),
    images: path.join(root, "src", "public", "images"),
    default_pet_thumbnail: path.join(root, "src", "public", "images", "default_pet.svg" )
}