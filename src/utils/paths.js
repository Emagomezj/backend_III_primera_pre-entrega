import path from "path";

const root = path.resolve()

export const paths = {
    root: root,
    src: path.join(root,"src"),
    public: path.join(root, "src", "public"),
    images: path.join(root, "src", "public", "images"),
    default_pet_thumbnail: path.join(root, "src", "public", "images", "default_pet.svg" )
}