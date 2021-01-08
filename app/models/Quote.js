export default class Quote {
  constructor(data){
    this.author = data.quote.author
    this.body = data.quote.body
  }

  get Template(){
    return `
      <div class="bg-light rounded quote-display">
                <p>${this.body}</p>
                <h6 class="d-none quote-author">-${this.author}</h6>
                
    </div>
    
    `
  }
}