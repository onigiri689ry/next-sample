export async function getServerSideProps() {
  const response = await fetch('http://localhost:8000/products')
  const products = await response.json()

  const data = products.data

  return { props: { data } }
}

export default function Home({data}: {data: any}) {
  return (
    <div>
      <ul>
        {data.map((product:any)=> (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}