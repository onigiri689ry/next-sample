import Link from "next/link";

const productId = ({ product }:{ product:any }) => {
    return (
        <div>    
            <h1>{product.id}</h1>
            <p>{product.name}</p>
            <br />
            <p><Link href="/"><a>戻る</a></Link></p>
        </div>
    );
}

export default productId;

//どんなpathがあるか
export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/products");
    const json = await res.json();

    const paths = json.data.map((content:any) => `/products/${content.id}`);
    return { paths, fallback: false };
}

//各ページのレンダリング
export const getStaticProps = async (context:any) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:8000/products/${id}`)
    const json = await res.json();
    const json2 = json.data 

    return {
        props: {
            product: json2
        }
    }
}