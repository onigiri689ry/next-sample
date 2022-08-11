import { useRouter } from 'next/router' // インポート
import { useEffect } from 'react' // 副作用を伴う処理用に導入

const Page = () => {
  const router = useRouter() // useRouterの使用

  // 以下のコメント部分のコメントを解除すると/userouterに移動するようになる
  // 注: サンプルプロジェクトでは/userouterに対応するページはありません
  useEffect( () => {
      router.push('/userouter')
  })

  return <span>{router.pathname}</span>
}

export default Page