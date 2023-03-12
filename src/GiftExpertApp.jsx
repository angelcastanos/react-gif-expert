import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GiftExpertApp = () => {
    const [categories, setCategory] = useState(['One Punch'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategory([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map(
                    (category) =>
                        <GifGrid key={category} category={category} />
                )
            }

        </>
    )
}