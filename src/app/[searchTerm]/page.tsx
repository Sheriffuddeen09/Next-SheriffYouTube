/*import { Metadata } from 'next'
import getWikipedia from '../../../lib/SearchParams'
import ListItem from './component/ListItem'

type Props = {
  params:{
    searchTerm: string
  }
}
export async function metadata({params:{searchTerm}}:Props):Promise<Metadata>{
    const postSearch: Promise<SearchResult> = getWikipedia(searchTerm)
    const data = await postSearch
    const displayTerm = searchTerm.replaceAll('%20', '')
    if(!data){
        return{
            title: 'search not found'
        }
    }
    return{
        title: displayTerm
    }
}
export default async function page({params:{searchTerm}}:Props) {
  
  const postSearch: Promise<SearchResult> = getWikipedia(searchTerm)
  const data = await postSearch
  const results: Result[] | undefined = data?.query?.pages

  return(

   <div>
    {
      results
      ?
      Object.values(results).map(result =>(
        <ListItem result={result}/>
      ))

      :
    <h2> {searchTerm} is not Available in the search</h2>
    }
   </div>
  )
  }

*/

export default function Search(){

  return(
    <div>
      
    </div>
  )
}