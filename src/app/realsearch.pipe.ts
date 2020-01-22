import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realsearch'
})
export class RealsearchPipe implements PipeTransform {

  transform(posts: any, term: any): any {
    
    

    if (term == undefined)
    {
      return posts
    }
    else
    {
      return posts.filter(function(posts){
        return posts.title.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}
