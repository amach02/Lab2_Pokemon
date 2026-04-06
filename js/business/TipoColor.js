export class TipoColor {
    

    static changeBackground(type) {
        console.log(type);
        switch (type) {
            case "grass":
                document.body.style.backgroundColor = "#78b35a";
                document.body.style.color = "#11540f";
                break;
            case "fire":
                document.body.style.backgroundColor = "#d27553";
                document.body.style.color = "#672d0a";
                break;    
            case "water":
                document.body.style.backgroundColor = "#69bce0";
                document.body.style.color = "#10425b";
                break;
            case "electric":
                document.body.style.backgroundColor = "#F9E79F";
                document.body.style.color = "#ccb24c";
                break;
            case "normal":
                document.body.style.backgroundColor = "#c7b983";
                document.body.style.color = "#8a805b";
                break;
            case "psychic":
                document.body.style.backgroundColor = "#d38acd";
                document.body.style.color = "#9c6a98";
                break;
            case "dragon":
                document.body.style.backgroundColor = "#8b8ad3";
                document.body.style.color = "#53587e";
                break;
            case "ice":
                document.body.style.backgroundColor = "#c2ecff";
                document.body.style.color = "#b1c5fc";
                break;
            case "bug":
                document.body.style.backgroundColor = "#7c8847";
                document.body.style.color = "#4e552f";
                break;
            case "dark":
                document.body.style.backgroundColor = "#241b1b";
                document.body.style.color = "#1d0606";
                break;
            case "fairy":
                document.body.style.backgroundColor = "#f4c2d0";
                document.body.style.color = "#e09aa5";
                break;
            case "fighting":
                document.body.style.backgroundColor = "#5e1e1e";
                document.body.style.color = "#351010";
                break;
            case "flying":
                document.body.style.backgroundColor = "#20b1b6";
                document.body.style.color = "#348083";
                break;
            case "ghost":
                document.body.style.backgroundColor = "#7320b6";
                document.body.style.color = "#46275f";
                break;
            case "ground":
                document.body.style.backgroundColor = "#ac752d";
                document.body.style.color = "#694c25";
                break;
            case "poison":
                document.body.style.backgroundColor = "#9c6a98";
                document.body.style.color = "#775474";
                break;
            case "steel":
                document.body.style.backgroundColor = "#9c9c9c";
                document.body.style.color = "#4c4c4c";
                break;
            case "rock":
                document.body.style.backgroundColor = "#b8a038";
                document.body.style.color = "#6e5c1e";
                break;
            default:
                document.body.style.backgroundColor = "#FFFFFF";
        }
    }//END FUNCTION
}