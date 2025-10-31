import Link from 'next/link';
import { getAllPosts, getAuthorById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function AdminDashboardPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold">Posts</h1>
          <p className="text-muted-foreground">
            Manage your articles here.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/posts/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Articles</CardTitle>
          <CardDescription>A list of all posts in your blog.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map((post) => {
                const author = getAuthorById(post.authorId);
                return (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">
                        <Link href={`/admin/posts/edit/${post.slug}`} className="hover:underline">
                            {post.title}
                        </Link>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{author?.name || 'Unknown'}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline">Published</Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {format(parseISO(post.publishedAt), 'MMM d, yyyy')}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/admin/posts/edit/${post.slug}`}>Edit</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
