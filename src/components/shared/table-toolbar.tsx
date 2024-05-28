import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";

export const TableToolbar = ({ table }: { table: Table<any> }) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center py-4 gap-[20px]">
      <Input
        placeholder="Filter products..."
        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("title")?.setFilterValue(event.target.value) ||
          table.getColumn("brand")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <Cross2Icon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
