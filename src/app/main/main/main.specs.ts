import { HttpClient, HttpXhrBackend } from "@angular/common/http";
import { HighscoreService } from "src/app/highscore/highscore.service";
import { QuestionService } from "src/app/question/question.service";
import { MainService } from "../main.service";
import { MainComponent } from "./main.component"

describe('MainComponent',()=>{
  it('ngOninit should set the values of categories',()=>{
    const hc=new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));
    const hs=new HighscoreService(hc)
    const ms=new MainService()
    const qs=new QuestionService(hc,hs)
    const comp = new MainComponent(qs, ms);

    expect(comp.selectorCategory).toBe(undefined,'undefined at first')
    comp.ngOnInit()
    expect(comp.selectorCategory).toMatch(/Any Category/,'Any Category after init')
  })
})
