import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import '../components/product/Product.scss';
import user1servicenow from '../components/product/user1mic.jpeg';
import user2servicenow from '../components/product/user2mic.jpeg';

const whichUser=(user)=> {
    if(user===1) {
        return user1servicenow;
    } else {
        return user2servicenow;
    }
}

const Homepage = () => {
    const [user,setUser] = useState(1);
    
    
        const HandleClickUser1=()=> {
        setUser(1);
        }
        const HandleClickUser2=()=> {
        setUser(2);
        }
    
    
   

    return (
        <>
        <button className="button1" onClick={HandleClickUser1}>User 1</button>
        <button className="button2" onClick={HandleClickUser2}>User 2</button>
        <div className="cust360div"> <h1 className="cust360"><span className="Cu">Cu</span><span className="st">st</span><span className="om">om</span><span className="er">er</span> <span className="span360">Dashboard</span></h1></div>
        <h1><img className="salesImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAB4CAMAAADixjaaAAAAq1BMVEX////+/v53d3fyUCICpO+AuwH/uQJycnJubm5qamrt7e3Z2dm8vLzFxcV9fX36+voAn+/yWzLPz8/yRAD1n4yGyfL2+/7/tQDO6PmKwCDyTRzi7cuVlZWIiIj+vCD+7cz1lYHM4apytQC11IN3w/L94av719CdnZ0mqO7k5OT91YWmpqawsLBiYmL75d/x9+b3+/HyOAD2wrW11Xuv2/T91Hv99N9VVVXd7/pe6AZ7AAAIX0lEQVR4nO2b6bqkthGGSzgzEhKgGC9ZBmUcJzYh0HFWJ/d/ZZFUJRA06hnb3af9HNf364CqhXi11NJ9AFgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYr1qfVvW3wR8966svz976A/Sp0V98rmFP775XUlv3oF4jYLfF/XZV57I129K+vq1EvmkqEikCISJMBEmwkRITOSoXzaRGH8c7/1yiXgYVk/aHpg8jcjJ7LysAPrRuc659nD/jkS2QPh0ALvGMD3H2XlRweSUlFVVqdnuhnFHIqBb0nT9pmANtvWx0Y/ncqlb8TQk0KuAw0s+kIi51FGX0V69KRhFjQ0EPk6FwfTPIgITAZHyoUQUUq+6k0WyUKOMRHqanicRARgiECWdw/nb9vpDiNTN1RFj6yon0sYByfFJ2wZMF5+/WCHwPLNmHHQczEOISHfcNtDuiUxVPNSuyL2QoJFxmOmw7+eqrh9JpKrNwceDkzkRT0jV6jLrJy0RMYfh1HSMgbj4kcuHEpHDgYiR1Z4ImLbprw/glxHYMYznohORuGIeSqSq97MP44FIYCKeFo68MBE6s/JGmLq4bXMiJ+MsxXf7m7fNTvKU69svTKSJSHZnazzIpGvURuRqmP5CT8aYSdPtZIHZR3JK8cpbrWbb50Vs2OcpIXcJvZrtdux1JiIkJGLx4t5ElMEdkgVfoIP3r9uMCDSLV7PuLT/wdh5c13VumJsYICxkAa1PPyj5AJiWkIz4bGSY+3zbge1nbBgXs/UK/RJ79d362/HJtvX94nKd4yi84ojdEi/vTkSa6XKIjWnxTBsRECGpkF0iAqLp/DUGKVKFcxl8+CSVm3ws5VWH7vwqGqrVSlauX5H4rGD7uBPpqOrdzl6HJacHzGfwJiq/fAAR9LR53DqrkFCJHZF45KSNPLkUrqyeCrq406Y50lRLWBBtLavc7pKwQ3/JWogI6Plgr9pIdXfzSvcn0mM0tkVfoCXeLxHxEWQK8VVINzIiw4INgYhoZG4VVGMGlbycbwgtSMQfn3WylymJaZ9DRKNnSdsGmjpc6hIRb49jrLtxngdZb0SqznclQ4LoifRkJYdgRQwwb8Sjy58LzeI/H4kAUCalYq+K9o4B7XxCSl1RaorkJGai8FlR//iB32CtRGwcSz2l3Rwft0CBCAh6n6rV1ks3aiMS10FvWjcLEQP/ql5stFrwNcLmpCxFTdZ35lsqkSWT1CvtS9kFl6SnuE5qo6cgPaGvmeIlfF7UV/8U8O5PRf3ruxIRMPHhY9rjYSxyKhJJWZ9NvlA3GRFl4j0LhKBfc5E6bSfswSfSGA1DAEObIxze5MXRodTx8+LU+66XNyRut5aI2DiaC+7xGK/6pEqcE6ElnyeH+GZIxO98vGfxslmzZdwVYTcSkTUoDJ+nvEFtnhgHhTvyZoR2+5V/FBFKLbEmgPFq3ReJxPar3JCIyHH1JhgzbNkB6HUN4SrrdmlS5KXGbZRk5bZZKBD5oqx/fwnv/1rUf74v7RqRzta4nzHxtkUiuKncsVKCRFSbjueFdsZmYMd4XHn3QdWOwazTRCtC5XGijVad+RCRX5f15y/hm9+U9b5IRABGEQHOFKKTuFwK58hC73VccehrTBr0KFPn26SnZYCv752F622KRfBYzhLOVDdrP0TkV0Uhkbcl3SRCcWsIGyWeqwUiNDh13DRExCWHRXOelytpdY1hnaV4pnYtefSaDpnMHqE2TyGyRpz4bAzpC0SuX3UjIlciOgbCaveGJr71EKa/SdGpTwHilOhL9pJkP6tnEolxq3cUWq0Oo0DEfRyR4QYR319frWVLPMnOiDx1jWgMwm2YF1q8N4mc75orIie7ZkYfb0OuSFD8CYtEznbNc84R/xD0fiaLFG6eI+cn60ZEDOl1NouQHfgYNoXGth0qiuYpl/L5dm7vUpniGUQExa04iKlMRFBGPN4mkpb8zvvuyseRSe8w2pvS0ttVadD7Ts8iYtcUM8SrZSLkJ3YnxBmRLb5aiVTHZQC0NLzPtvMRNCU6IfB5ChGKzKpsFksxK80rZHMN10TwXUPCmKxmDEfwG7n0WZwHQ16/uqy8klPLkuUDEXrW44jgIg2DgJtEKAWTc0q0rFmuifhzEWOOljIL0afMz89+Q1VXWKtV5K5l+BN7pcfYMyIdnTBRjyJCOz9kp+lGIffFxMav2tan81b3sxrOiGiqiCxGezOzrBmz31GX8Nnw2jGMjes/pdRdg70iUMq19kQEHduDsUK3DyQS49bMYxYrRvQNqJRuGIZQGT0jQq4lvKM3c6l6QvUEKbthnMeBoOE6IITdsNqrwZ4Roa6DpZOPI5Ky18F+gIhIpY+qwipwgYhdf16QasUSM2aqBqylaywspL2Q29PBfEVk2iyrRxLpKW5dJ7lEBJpUaMVVdUokFuxzM7meha3M7qrkj8J7y539nLXsiKwlXK+7Eglly8tGRFf+eqvJw3JZf1EjulDTlGmEYOaqphlWygWIEMueu1+ieLOxogRGqtqlr3tC5RqLy1LW3bJ9CeRjNmqoQvV2/UmT9zthKP/NLBcZK7H+6fckgr+6ygKL8EMrs7VP20+yoI9/221IUzMEgNL5kxO3QvyN1uH7Y2uasUOzXm/FEN0v4dOqG9spK7R4j2NiQ10NjdGbj8afgDVZ2c6a2fer3GzuSOTqm8tjpS1vP7G1KFGwKJjRXbHe3SNMDTv7k++Ck6G4p/f9qTqvVX6sWfHTH9mtSF+4/4yI/EzERI5iIkcxkaOYyFFM5CgmchQTOQr+UtYXnsjbP5T09rUS+W1Z/xPw/fuyXut/ybNYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxXrV+j/YazvMEZYVzQAAAABJRU5ErkJggg==" alt="" /></h1>
        {/* <div className="textC"><h1 className="h1C">Bringing Companies and Customers together!</h1></div> */}
        <ul className='circle-container'>
        
        
        
        <li className='listItem'><Product ID="42" className="product" imageSource="data:image/png;base64,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" productName = "Azure"/></li>

        
        <li className='listItem'><Product ID="46" className="product" imageSource="data:image/jpeg;base64,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" productName = "Word"/></li>
        <li className='listItem'><Product ID="47" className="product" imageSource="data:image/jpeg;base64,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"  productName = "Excel"/></li>
        <li className='listItem'><Product ID="48" className="product" imageSource="data:image/jpeg;base64,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" productName = "Powerpoint"/></li>

        <li className='listItem'><Product ID="45" className="product" imageSource="data:image/jpeg;base64,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"  productName = "Bing"/></li>

        <li className='listItem'><Product ID="41" className="product" imageSource="data:image/png;base64,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" productName = "VS Code"/></li>
        
        <li className='listItem'><Product ID="44" className="product" imageSource="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEX///9LU7x7g+tQWck1P7duddNESoV4gOZxeNdZX6tKUrdGTIQ8RrjP0OpveOpZYtA7RsVCS7o4Qrfs7feipdj5+f1iabw+RHo+RHaIjM9ja8t1fupye+ptdulKVMhHT7tAS8abn9ZvdMbJzPa1ufNcZMxmbc5RWsna3Pm+wfSprfHm6Pu0uPOhpvA/Ssbc3vKZn+/P0fdHTqeLku20t+WHjNeOle3U1exob8fi5PqDiNZQVptITpz09P28v+dobJcvN3pVXL+tsOOWm9zExuZ2e8lCSIstNGuGiaLX195la63Awthscr3KSSTeAAAFsklEQVR4nO2dbVviOBSGtUhXxrUWEZRpKBWsiAgIvuswq47O7szu//89WwqOFJI0QGJa5rk/zAcvejX35O0kbU7X1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgimc1JvNZv2koLsgaui1HYs4Q4hFzutF3eWRzOCMEMd4xyGV05WqySNrUm8sWTnVXSxptIxZv9DROdFdNDnUK1S/IdaZ7sLJ4MhiChoGaesu3vJwBVdBsccXDBSPdBdxOQpxgoZRudNdyKW4iBUMhlTdhVyGOhExTPOASp8Hp7HSG8H1RKowqET2YFPodhMd3In0wlCRenXr0Lc9z+vY/mHrgwsuyiB+IB1BKMNpN2u7mTGune1+fPEFqIt1Q2ozLb/7jRzLGgRiORU1NK6nriz6Eb/Q0U/geCTaDYPRNHphsTEjGChmkqco2g0Dw0HkwmOKYKB4rMmDSVHckEQGyz2PJpjJeIe6VBgsaliw6YKZjJ2wuXFRw2/UNhq206QNqAv2Q2YVBpWozYWOsGBkLH1h9MKwJ75ok6FyLjwfGhNXsRtp0Ey/aZOh0hSOaSb3FWs8w5o2GSpdPxtl8w+6IelNXOWzBTMZX5sMncApQiBJdYwsEHd4hjvKylq82Z6fm/LnCUql26EjRdGJ7LfRA5oxqsKaQXlj988FqK5P0jfNElXRiiye7nn98F6NYGs3vy4F03wIFGeqMLqyeOYZPqsxlOS3vv5py8xtZjenDCvRWKzbYRt21CyE96QZVr+YZna6Eme2hBucfqhEcO1JlmDQFbeGXTHSE52L6ftdMoMa71KN4YY8w1EzjY41s+taduStRlCtoTOYveENI/a2t9Nn6FBqMOCQ2k7VLYDVGVrnjFuWKeOpp25xqMrQcXrMe+7NNFRb4RaGGkNCmrybdhuRluo1btQJSjU0Q0OHWNf1uNt+9TuuGwyrwT8d/6tCP6mGT39t5Tbv20cnQlufrcur40bj+OpZ9WMLeYbVW8VFXRCqYTUfQ5V20WfdLnRohtXaXgxPFMU0GeZjx+4aDBMEDOn8nobrt2vFpfkow72FDD89PvZ934qjstOxOyxsX/o6mDof3pYnGP9wcD/xtyfaVbQVMB3erqkn+4E3Paap/iKfH/+wsPH+R1oNzmNo8HZrXMlb3/FR25vhbtwP5zB0OIayN2z0GBo8Q8mP9DUZcp9fyH1UCkMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCMMEGY6esLdW13BjRKxgeg2FgSEMfyNDuScvEmjoZlfeUO554AQaenLfbNdkyHspSnJyBU2GvIFG8nHg5BnKPkqaPENb8ruJ1DdFF6NvynhzT3pmhZf4iFqQ6ndxQ8I27Eh/T7gm6yBwf1/ckD1ZqDgr+7oro6FW+wdmeCRfRJDdDSXHM2O2X/MbYrD/K/rfD/ZDw+nT6lTY3dDVnBDr7wM2Q8FcSayRMvN/dHRnUvpnn81QMFdaKqJxPe0JBn88miweHh5yudytkCCjkboN3TUY8DPHZ5mwu6Mo8cd8/PuF51cqiVUhLemA5yYkS1SJi1g803a9KcfgD4pSRszPyxNHUGimGCbGenm1vfCgc3jU2bNfE1J/If8x/cTm+re0UTfPV8cNzxsedVaVLmJBWuws82JM5/pMHuJ5S6lYCZgR4lhKkJ9rISG0xDMmzuCwsoEki9hs+hx0l12QM7FM3rMQSkaeZNJeTNHSHliLs5CilarvJJzO3xdJimpwSHPOmd8xUtMH3zgh80z9JB3TRJTBtXhnrKRhoqdQp3zKilqBFykI1egU25V4R8LJ+pUCCnGOxElpA32nMPVZuUkc6yLV9feLXnv4ZcBpO2IZRymbAnncNc8di4y+gOgQYlkXp/XUDi9MinfhVyyb9d6qfscSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIM38D2Jx56VcetARAAAAAElFTkSuQmCC" productName="Teams"/></li>
        <li className='listItem'><Product ID="43" className="product" imageSource="data:image/png;base64,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" productName = "Outlook"/></li>        
        
        
        
        
        

        <li><img className="customer360image" src={whichUser(user)} /></li>
        
        </ul>
        </>
    );
}

export default Homepage;