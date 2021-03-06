import React from 'react';

class MoviePage extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        return(
            <div className="moviePage">
                <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"></img>
                <p>
                    The Matrix is a 1999 American science fiction action film[3][4] written and directed by the Wachowskis,
                    [a] and produced by Joel Silver. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving,
                    and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in
                    which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machine
                    s to distract humans while using their bodies as an energy source.[5] When computer programmer Thomas
                    Anderson, under the hacker alias "Neo", uncovers the truth, he "is drawn into a rebellion against 
                    the machines"[5] along with other people who have been freed from the Matrix.
                </p>
                <a href="./main.html">return to main </a>
            </div>
        )
    }
}

export default MoviePage