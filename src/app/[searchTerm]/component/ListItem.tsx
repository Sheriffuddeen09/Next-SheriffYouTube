import Link from "next/link"


type Param = {
  result: Result
}
export default async function ListItem({result}:Param) {
  

    const itemSearch = (
        <div>
            <Link href={`/http://localhost:4000/posts/${result.id}`}> 
            <h4> {result.title} </h4>
            </Link>
            <p>{result.video}</p>
        </div>
    )

    const content = result.user
                    ?
                <div>
                    <span>
                        <img src={result.user} 
                        alt={result?.title}
                        width={30}
                        height={30} />
                    </span>
                    <span>
                        {itemSearch}
                    </span>
                </div>
                    :
                <span>
                    {itemSearch}
                </span>
  return content
  }

