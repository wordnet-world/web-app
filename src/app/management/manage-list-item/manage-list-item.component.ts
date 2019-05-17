import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../common/game/game";
import {DeleteGameService} from "../delete-game/delete-game.service";
import {StartGameService} from "../start-game/start-game.service";

@Component({
  selector: 'app-manage-list-item',
  templateUrl: './manage-list-item.component.html',
  styleUrls: ['./manage-list-item.component.css']
})
export class ManageListItemComponent implements OnInit {

  @Input() game: Game;
  @Input() isLast: boolean;
  confirm: boolean = false;
  startDisabled: boolean = false;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private deleteGameService: DeleteGameService,
              private startGameService: StartGameService) { }

  ngOnInit() {
    if(this.game.status != 'waiting') {
      this.startDisabled = true;
    }
  }

  handleConfirm() {
    this.confirm = true;
  }

  handleDelete() {
    this.deleteGameService.deleteGame(this.game)
      .then(() => {
        this.delete.emit();
      });
  }

  handleStartGame() {
    this.startDisabled = true;
    this.startGameService.startGame(this.game)
      .then(result => {
        console.log(result);
        this.game.status = 'in-progress';
      });
  }

}
