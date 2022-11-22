import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IPost } from '@core';
import { PostService } from '@services';
import { filter, find, map } from 'rxjs';

@Component({
  selector: 'header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSearchComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  onEnterKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.postService.getFilteredPosts()
      .subscribe(val => this.searchs(val))
    }
  }

  searchs(val: any) {
    const k = Object.keys(val)
      .map(resp => val[resp])

      for (let i = 0; i < k.length; i++) {
      }
    }

  }
