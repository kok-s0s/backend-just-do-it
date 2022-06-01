import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Get('category')
  getBookmarkCategory(): any {
    return this.bookmarkService.getBookmarkCategory();
  }

  @Get('list')
  getBookmarks(): any {
    return this.bookmarkService.getBookmarks();
  }
}
