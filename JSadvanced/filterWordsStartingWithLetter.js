let quote = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";

let words = quote
                .split(' ')
                .filter(w=> w.length > 2 && w[0] === 't')
words.forEach(w=>console.log(w));


    


