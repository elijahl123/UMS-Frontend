import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/pro-regular-svg-icons';
import { faChevronLeft, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { Router } from '@angular/router';
import { NotesService } from '../../../services/components/features/notes/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  plusIcon: IconDefinition = faPlus;
  leftIcon: IconDefinition = faChevronLeft;

  constructor(private notesService: NotesService, private router: Router) {
  }

  ngOnInit(): void {
    this.notesService.init();
  }

  isOnHomepage() {
    return this.router.url === '/notes';
  }

  goHome() {
    this.router.navigate(['notes']).then();
  }
}
