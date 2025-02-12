using System;
using System.Collections.Generic;

namespace BuseBack.Models;

public partial class Transanction
{
    public int TransactionNo { get; set; }

    public string TransactionDescription { get; set; } = null!;

    public double TransactionAmount { get; set; }

    public DateTime TransactionDate { get; set; }
}
