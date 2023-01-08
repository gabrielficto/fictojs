const keywords = {
    "fun ": "function "
};

const errors = {
    MAIN_FUNC_NOT_FOUND: "main function not found"
}

class Ficto {
    static print(arg: any): void {
        document.write(arg);
    }

    static randomInt(min: number, max: number): number {
        return Math.floor(Math.round(Math.random() * (max - min)) + min);
    }
}

class FictoJS {
    static exec(source: string){
        if(!source.includes("main"))
            throw(errors.MAIN_FUNC_NOT_FOUND); 

        eval(source.replace("fun ", "function "));
    }

    static cleanUp(){
        (document.querySelector('ficto') as HTMLDivElement).innerText = "";
    }
}

try {
    FictoJS.exec((document.querySelector('ficto') as HTMLDivElement)?.innerText);
} catch(err){
    document.write(`<h5 style="color: red">Error: ${err}<h5>`);
}

FictoJS.cleanUp();