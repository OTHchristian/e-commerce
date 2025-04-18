import { ArticleElement } from "./ArticleElement";

export function Article(){
    return <div className="article">
        <div className="row">
            <ArticleElement></ArticleElement>
            <ArticleElement></ArticleElement>
            <ArticleElement></ArticleElement>
            <ArticleElement></ArticleElement>
        </div>
    </div>
}