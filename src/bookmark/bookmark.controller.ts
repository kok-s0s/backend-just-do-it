import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @Get('category')
  getTopicType(): any {
    return this.bookmarkService.getBookmarkCategory();
  }

  @Get('list')
  getBookMarks(): any {
    return this.bookmarkService.getBookmarks();
  }
}
