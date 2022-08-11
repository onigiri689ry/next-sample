import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// 型注釈が無くてもビルドが通るため省略
function LinkSample() {
  const router = useRouter()

  const onSubmit = () => {
    // /ssrへ遷移します
    router.push('/ssr')

    // 文字列の代わりにオブジェクトで指定できます
    // /ssg?keyword=helloへ遷移します
    router.push({
      pathname: '/ssg',
      query: { keyword: 'hello' },
    })
  }

  const onClickReload = () => {
    router.reload()
  }

  const onClickBack = () => {
    router.back()
  }

  useEffect(() => {
    // 遷移開始時のイベントを購読します
    router.events.on('routeChangeStart', (url, { shallow }) => {
      console.log('routeChangeStart', url)
    })

    // 遷移完了時のイベントを購読します
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      console.log('routeChangeComplete', url)
    })
  }, [])

  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '12px'}}>
      <Link href="/ssg">
        <a>Go TO SSG</a>
      </Link>
      <Link href="/ssg?keyword=next">
        <a>GO TO SSG with keyword &quot;next&quot;</a>
      </Link>
      <Link
        href={{
          pathname: '/ssg',
          query: { keyword: 'hello' },
        }}>
        <a>GO TO SSG with keyword &quot;hello&quot;</a>
      </Link>
      <Link href="/ssg">
        {/* aの代わりにbuttonを使うと、onClickが呼ばれたタイミングで遷移します */}
        <button>Jump to SSG page</button>
      </Link>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClickReload}>Reload</button>
      <button onClick={onClickBack}>Back</button>

    </div>
  )
}

export default LinkSample