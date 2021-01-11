import { PokeTablaComponent } from './../poke-tabla/poke-tabla.component';
import { ColorType } from 'src/shared/ColorInterface';
import { AfterViewChecked, ChangeDetectorRef, Component, Input, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detalle',
  templateUrl: './poke-detalle.component.html',
  styleUrls: ['./poke-detalle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeDetalleComponent implements OnInit {
  // @Input('selecid') id :string;


  private color1: string = 'ffffff'
  private color2: string = '707070'
  public backgroundColor1: string = this.color1;
  public backgroundColor2: string = `linear-gradient(180deg, #${this.color1} 34%, #${this.color2} 100%)`;
  private contador: number = 0


  pokemon: any = '';
  pokemonImg = '';
  pokemonType: string = '';
  pokemonTypes: string = '';


  constructor(private activatedRouter: ActivatedRoute,
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef) {
    //obtiene parametro de la url
    // this.activatedRouter.params.subscribe(
    //   params => {
    //     this.getPokemon(params['id']);
    //   }
    // )
      // this.getPokemon('selecid');

  }


  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewChecked() {

    this.cdr.detectChanges();

  }



  getPokemon(id) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;

        this.pokemonType = res.types[0].type.name;
        if(res.types[1]){
        this.pokemonTypes = res.types[1].type.name;
        }
        else{
          this.pokemonTypes = '';
        }
        this.contador = 0;
        // this.getTypeColor(this.pokemonType);
        // this.getTypeColor(this.pokemonTypes);

      },
      err => {
        console.log(err);
      }

    )

  }

  getTypeColor(type: string): any {
    if (type) {
      const Color: any = ColorType;
      this.contador += 1
      if (this.contador === 1) {
        this.color1 = Color[type];
      }
      if (this.contador === 2) {
        this.color2 = Color[type];
        this.backgroundColor1 = this.color1;
        this.backgroundColor2 = `linear-gradient(135deg, #${this.color1} 20%, #${this.color2} 80%)`;
        this.cdr.detectChanges();
      }
      return '#' + Color[type];
    }
  }
}


