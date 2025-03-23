import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PostTable({ posts }: { posts: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map(post => (
          <TableRow key={post.id} className="hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
